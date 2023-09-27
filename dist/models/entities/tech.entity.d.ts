import { BaseEntity } from 'typeorm';
export declare class Tech extends BaseEntity {
    id: string;
    name_tech: string;
    type: string;
    picture: string;
    priority: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
