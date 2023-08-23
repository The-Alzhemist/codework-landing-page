import { SubmissionError} from '@formspree/core';
export interface FormSpreeStatus {
    submitting: boolean;
    succeeded: boolean;
    errors: SubmissionError<any> | null;
}