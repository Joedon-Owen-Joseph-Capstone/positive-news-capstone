import express, { Request, Response } from 'express';
import { ArticleTagSchema } from './article-tag.validator';

const router = express.Router();

// Validation middleware
const validateArticleTag = (req: Request, res: Response, next: any) => {
    const schema = ArticleTagSchema;

    // Validate req.body against the schema
    const result = schema.safeParse(req.body);

    if (result.success) {
        // If validation is successful, store the validated data in req.articleTagData
        req.articleTagData = result.data;
        next();
    } else {
        // If validation fails, respond with an error
        res.status(400).json({ error: 'Invalid data provided', details: result.error });
    }
};

// Example route to handle POST requests for creating article tags
router.post(
    '/create-article-tag',
    [
        // Add validation middleware to the route
        validateArticleTag,
    ],
    async (req: Request, res: Response) => {
        try {
            // Access the validated data from req.articleTagData
            const data = req.articleTagData;

            // Perform actions like saving to a database
            // Replace the following line with your actual logic
            // Example: Assuming you have a database model called ArticleTag
            const createdArticleTag = await ArticleTag.create(data);

            res.status(200).json({ message: 'Article tag created successfully', data: createdArticleTag });
        } catch (error) {
            // Handle other errors that might occur during processing
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
);

// Example route to handle GET requests for fetching article tags
router.get('/get-article-tags', async (req: Request, res: Response) => {
    try {
        // Perform actions like fetching from a database
        // Replace the following line with your actual logic
        // Example: Assuming you have a database model called ArticleTag
        const articleTags = await ArticleTag.findAll();

        res.status(200).json({ message: 'Article tags fetched successfully', data: articleTags });
    } catch (error) {
        // Handle other errors that might occur during processing
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;