import adapter from '@sveltejs/adapter-vercel';

export default {
    kit: {
        adapter: adapter({
            // Optional Vercel-specific settings can go here
        })
    }
};