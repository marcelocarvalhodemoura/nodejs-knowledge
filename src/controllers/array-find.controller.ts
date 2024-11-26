import { Request, Response } from "express";

/**
 * Controller for handling array find operations.
 */


export async function arrayFindController(req: Request, res: Response): Promise<Response> {
    try {
        const { array, value } = req.body;
        
        // Input validation
        if (!Array.isArray(array)) {
            return res.status(400).json({
                error: 'Invalid input: array is required'
            });
        }

        const result = array.find((item: number) => item === value);
        
        return res.json({
            result: result,
            array: array,
            message: result !== undefined 
                ? `The value ${value} was found in the array` 
                : `The value ${value} was not found in the array`,
        });
    } catch (error) {
        console.error('Error in ArrayFindController:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}