import React from 'react';
import { Button, Form, Input, Typography, Row, notification } from 'antd';
import emailService from '../services/email/email.service';
import { GENERATE, FORM_MESSAGES, FORM_LABELS, ERROR_MESSAGES } from '../utils/contants';
import { DomainValidations, NameValidations } from '../utils/validators';

const { Text } = Typography;

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 15 },
};
type NotificationType = 'success' | 'info' | 'warning' | 'error';


const EmailForm: React.FC = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [email, setEmail] = React.useState<string | null>(null)

    const onClear = () => {
        form.resetFields();
        setEmail(null)
    }

    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType, data: any) => {
        api[type]({
            message: data.message,
            description: data.description,
        });
    };

    const onClickGenerate = async () => {
        setIsLoading(true)
        try {
            const values = await form.validateFields();
            const { email } = await emailService.generateEmail({
                //trimming spaces
                fullname: values.fullname.trim(),
                domain: values.domain.trim()
            })
            if (email) {
                setEmail(email)
            } else {
                openNotificationWithIcon('error', {
                    message: ERROR_MESSAGES.title,
                    description: ERROR_MESSAGES.description
                })
            }

        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            setEmail(null)
        }
        setIsLoading(false)
    };

    return (
        <Form form={form} name="dynamic_rule">
            {contextHolder}
            <Form.Item
                {...formItemLayout}
                name="fullname"
                label={FORM_LABELS.NAME}
                rules={NameValidations}
            >
                <Input placeholder={FORM_MESSAGES.NAME} />
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                name="domain"
                label={FORM_LABELS.DOMAIN}
                rules={DomainValidations}
            >
                <Input placeholder={FORM_MESSAGES.DOMAIN} />
            </Form.Item>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="primary" onClick={onClickGenerate} loading={isLoading}>
                    {GENERATE}
                </Button>
                <Button
                    style={{ margin: '0 8px' }}
                    onClick={onClear}
                >
                    Clear
                </Button>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                <Text strong type={'success'} copyable={true} keyboard style={email ? { opacity: 1, transition: 'opacity 1s ease 0s', fontSize: '20px' } : { opacity: 0 }}>{email}</Text>
            </Row>
        </Form>
    );
};

export default EmailForm;