import { json } from '@sveltejs/kit';

export function GET() {
    // This data would usually come from a database. Currently simulated. 
    const staff = [
        { name: "Dr. Smith", dept: "Computer Science", status: "Active" },
        { name: "Prof. Stone", dept: "Mathematics", status: "On Leave" },
        { name: "Dr. Who", dept: "History", status: "Active" },
        { name: "Mrs. P", dept: "Physics", status: "Active" }
    ];

    return json(staff);
}