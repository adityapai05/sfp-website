const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteSubscriberCollectionId: String(import.meta.env.VITE_APPWRITE_SUBSCRIBER_COLLECTION_ID),
    youtubeApiKey: String(import.meta.env.VITE_YOUTUBE_API_KEY),
    youtubeChannelId: String(import.meta.env.VITE_YOUTUBE_CHANNEL_ID),
    emailjsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
    emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
    emailjsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),

}

export default conf;