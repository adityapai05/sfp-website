import { Client, Databases, Storage, ID } from "appwrite";
import conf from "../conf/conf";
import { Post } from "../types/post";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  //Database Services

  async getPosts() {
    try {
      const response = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId
      );
      return response.documents.map((doc) => ({
        title: doc.title,
        tags: doc.tags,
        youtubeVideo: doc.youtubeVideo,
        prepTime: doc.prepTime,
        cookTime: doc.cookTime,
        servings: doc.servings,
        ingredients: doc.ingredients,
        steps: doc.steps,
        summary: doc.summary,
        slug: doc.slug,
        image: doc.image,
        $createdAt: doc.$createdAt,
      }));
    } catch (error) {
      console.error("Error in getPosts() service: ", error);
      return false;
    }
  }

  async getPost(slug: string) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error in getPost() service: ", error);
      return false;
    }
  }

  async createPost(postData: Post) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postData.slug,
        postData
      );
    } catch (error) {
      console.error("Error in createPost() service: ", error);
      return false;
    }
  }

  async updatePost(slug: string, updatedData: Partial<Post>) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        updatedData
      );
    } catch (error) {
      console.error("Error in updatePost() service: ", error);
      return false;
    }
  }

  async deletePost(slug: string) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.error("Error in deletePost() service: ", error);
      return false;
    }
  }

  async createSubscriber(email: string) {
    try {
      const response = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSubscriberCollectionId,
        ID.unique(),
        { email }
      );
      return response;
    } catch (error) {
      console.error("Error in createSubscriber() service: ", error);
      return false;
    }
  }

  //Storage Service

  async uploadFile(file: File) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Error in uploadFile() service: ", error);
      return false;
    }
  }

  async deleteFile(fileId: string) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    } catch (error) {
      console.error("Error in deleteFile() service: ", error);
      return false;
    }
  }

  async getFilePreview(fileId: string) {
    try {
      return this.bucket
        .getFilePreview(conf.appwriteBucketId, fileId)
        .toString();
    } catch (error) {
      console.error("Error in getFilePreview() service: ", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
