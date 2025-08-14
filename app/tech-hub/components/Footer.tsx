
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark mt-auto">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Tech Hub. All Rights Reserved. Built for B.Tech students.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
