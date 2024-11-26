import { Request, Response } from "express";

export async function arrayFilterController(req: Request, res: Response): Promise<Response> {
    try {
        const { array, value } = req.body;
        
        // Input validation
        if (!Array.isArray(array)) {
            return res.status(400).json({
                error: 'Invalid input: array is required'
            });
        }

        const result = array.filter((item: number) => item === value);
        
        return res.json({
            result: result,
            array: array,
            message: result.length > 0 
                ? `The value ${value} was found in the array` 
                : `The value ${value} was not found in the array`,
        });
    } catch (error) {
        console.error('Error in ArrayFilterController:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}