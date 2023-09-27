import { BaseEntity } from 'typeorm';
export declare class Article extends BaseEntity {
    id: string;
    title: string;
    description: string;
    keyword: string;
    image: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
