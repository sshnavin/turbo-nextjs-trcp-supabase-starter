'use server';

import { api } from '../trpc/server';
import { z } from 'zod';

const schema = z.any(); // ¯\_(ツ)_/¯

export async function uploadFile(formData: FormData) {
    const file = schema.parse(formData.get('file'));
    try {
        api()
            .upload(file)
            .then((res) => {
                console.log(res);
            });
    } catch (e) {
        console.error(e);
    }
}
