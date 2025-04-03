import { open } from 'k6/fs';

export function readJsonData(relativePath = "users") {
    return JSON.parse(open(`data/${relativePath}.json`));
}