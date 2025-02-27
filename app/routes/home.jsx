export function meta() {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero py-8">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">React Router + DaisyUI</h1>
            <p className="py-6">A modern, production-ready template with DaisyUI components</p>
            <div className="flex flex-col">
              <a
                href="https://v5.daisyui.com/components/"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                React Router Docs
              </a>
              <a
                href="https://reactrouter.com/docs"
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                React Router Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
