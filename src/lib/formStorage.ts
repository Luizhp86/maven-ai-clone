// This is a simple in-memory storage for demonstration purposes
// In a real application, you would use a database like:
// - Postgres, MySQL, or MongoDB
// - Firebase Firestore
// - Supabase
// - PlanetScale
// - or any other database service

interface FormSubmission {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  segment: string;
  email: string;
  phone: string;
  message: string;
  contactMethod: string;
  createdAt: Date;
}

// In-memory storage
const submissions: FormSubmission[] = [];

// Generate a simple ID
function generateId(): string {
  return Math.random().toString(36).substring(2, 15) +
         Math.random().toString(36).substring(2, 15);
}

// Store a submission
export function storeSubmission(data: Omit<FormSubmission, 'id' | 'createdAt'>): FormSubmission {
  const submission: FormSubmission = {
    ...data,
    id: generateId(),
    createdAt: new Date(),
  };

  submissions.push(submission);

  // For debugging, log all submissions
  console.log('Current submissions:', submissions);

  return submission;
}

// Get all submissions
export function getAllSubmissions(): FormSubmission[] {
  return [...submissions];
}

// Get a submission by ID
export function getSubmissionById(id: string): FormSubmission | undefined {
  return submissions.find(sub => sub.id === id);
}

// This would be a good place for additional helper functions like:
// - getSubmissionsByEmail(email: string)
// - getSubmissionsByDate(date: Date)
// - deleteSubmission(id: string)
// - updateSubmission(id: string, data: Partial<FormSubmission>)
