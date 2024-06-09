'use server';

import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
    const search = formData.get('search') as string;

    if (search !== '') {
        if (search.startsWith('https://')) {
            redirect(search);
        } else {
            redirect('https://www.google.com/search?q=' + search);
        }
    }
}
