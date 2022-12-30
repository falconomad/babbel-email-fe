import React from 'react';
import { Card } from 'antd';
import EmailForm from './Form';
import { ImageSource } from '../utils/urls';

const { Meta } = Card;

const AppCard: React.FC = () => (
    <Card
        style={{ width: 500, boxShadow: '4px 3px 12px -8px', marginBottom: '5rem' }}
        cover={
            <img
                alt="email-image"
                src={ImageSource.emailCover}
            />
        }
    >
        <Meta
            description={<EmailForm />}
        />
    </Card>
);

export default AppCard;