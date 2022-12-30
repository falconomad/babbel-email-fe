import React from 'react';
import { Card } from 'antd';
import EmailForm from './Form';

const { Meta } = Card;

const AppCard: React.FC = () => (
    <Card
        style={{ width: 500, boxShadow: '4px 3px 12px -8px' }}
        cover={
            <img
                alt="example"
                src="https://datenschutz-generator.de/wp-content/uploads/2021/01/newsletter-tracking-logo-datenschutz-generator-dr-schwenke_2000.png"
            />
        }
    >
        <Meta
            description={<EmailForm />}
        />
    </Card>
);

export default AppCard;