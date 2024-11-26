import { Request, Response } from "express";

export async function arrayMapController(req: Request, res: Response): Promise<Response> {
    try {
        const { array } = req.body;
        
        // Input validation
        if (!Array.isArray(array)) {
            return res.status(400).json({
                error: 'Invalid input: array is required'
            });
        }

        let textNumbers: number[] = [];
        const result = array.map(
            (item: number) => {
                textNumbers.push(item * 2);
            }
        );
        
        return res.json({
            result: textNumbers,
            array: array,
            message: textNumbers.length > 0 
                ? 'This function maps an array of numbers to an array of doubled numbers' 
                : `Array empty`,
        });
    } catch (error) {
        console.error('Error in ArrayFilterController:', error);
        return res.status(500).json({
            error: 'Internal server error',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
}