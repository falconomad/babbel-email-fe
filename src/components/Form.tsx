import React from 'react';
import { Button, Form, Input, Typography, Row } from 'antd';
import emailService from '../services/email/email.service';
import { GENERATE, FORM_MESSAGES, FORM_LABELS } from '../utils/contants';

const { Text } = Typography;

const formItemLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 15 },
};

const EmailForm: React.FC = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [email, setEmail] = React.useState<string | null>(null)

    const onClear = () => {
        form.resetFields();
        setEmail(null)
    }

    const onClickGenerate = async () => {
        setIsLoading(true)
        try {
            const values = await form.validateFields();
            const { email } = await emailService.generateEmail(values)
            setEmail(email)
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
            setEmail(null)
        }
        setIsLoading(false)
    };

    return (
        <Form form={form} name="dynamic_rule">
            <Form.Item
                {...formItemLayout}
                name="fullname"
                label={FORM_LABELS.NAME}
                rules={[
                    {
                        required: true,
                        message: FORM_MESSAGES.DOMAIN,
                    },
                ]}
            >
                <Input placeholder={FORM_MESSAGES.NAME} />
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                name="domain"
                label={FORM_LABELS.DOMAIN}
                rules={[
                    {
                        required: true,
                        message: FORM_MESSAGES.DOMAIN,
                    },
                ]}
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