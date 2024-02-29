// articleTagController.ts
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
    (req: Request, res: Response) => {
        try {
            // Access the validated data from req.articleTagData
            const data = req.articleTagData;

            // Perform actions like saving to a database
            // Replace the following line with your actual logic
            res.status(200).json({ message: 'Article tag created successfully', data });
        } catch (error) {
            // Handle other errors that might occur during processing
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
);

export default router;
