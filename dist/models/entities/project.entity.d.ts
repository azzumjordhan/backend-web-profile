import { BaseEntity } from 'typeorm';
export declare class Project extends BaseEntity {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    keyword: string;
    image: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
