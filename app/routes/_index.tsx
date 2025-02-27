import React, { useEffect } from 'react';
import { data, Form, useLoaderData } from 'react-router';
import { toast as notify } from 'react-toastify';
import { dataWithError, dataWithSuccess, getToast } from 'remix-toast';

// Action function to handle form submissions
export async function action({ request }) {
  const formData = await request.formData();
  const feedback = formData.get('feedback');

  // Example validation
  if (!feedback || feedback.length < 5) {
    return dataWithError(null, 'Feedback must be at least 5 characters long');
  }
  // do something with the feedback like save it to a db, or send it to an API.
  return dataWithSuccess({ result: 'Data saved successfully' }, 'Thanks for the feedback');
}
// Loader function to fetch data
export async function loader({ request }) {
  const { toast, headers } = await getToast(request);
  // Example data that would normally come from a database or API
  const welcomeMessage = 'Welcome 🐁';
  return data(
    {
      toast,
      welcomeMessage,
    },
    { headers },
  );
}

export function meta() {
  return [
    { title: 'dsai front end stack template' },
    { name: 'description', content: 'jhu dsai front end stack template' },
  ];
}

export default function Home() {
  // Use the data from the loader
  const { welcomeMessage, toast } = useLoaderData<typeof loader>();

  // Show a toast notification if there is one, this depends on the ToastContainer being in the dom hierarchy
  useEffect(() => {
    if (toast) {
      notify(toast.message, { type: toast.type });
    }
  }, [toast]);

  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero py-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary mb-4">JHU DSAI Frontend Template</h1>
            <div className="flex flex-col gap-4">
              <div className="font-mono">{welcomeMessage}</div>
              <a
                href="https://reactrouter.com"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                React Router V7
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Tailwind
              </a>
              <a
                href="https://v5.daisyui.com/components/"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                DaisyUI
              </a>
              <a
                href="https://vitest.dev/"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Vitest
              </a>
              <a
                href="https://reactrouter.com/how-to/file-route-conventions"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                File Route Conventions
              </a>
            </div>

            <div className="divider font-mono">Send us feedback</div>

            <Form method="post" className="form-control">
              <textarea
                name="feedback"
                className="textarea textarea-bordered"
                placeholder="Tell us what you think"
              ></textarea>
              <button type="submit" className="btn btn-secondary mt-4">
                Submit Feedback
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
