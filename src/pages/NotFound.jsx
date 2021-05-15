// @ts-check
import React, { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 | Page Not Found | Patient Management';
  });

  return (
    <div className="mt-20 pt-20 pb-20">
      <div className="mx-auto max-w-screen-lg">
        {/* <p className="text-center text-2xl">Not Found!</p> */}
        <div className="p-4">
          <div className="flex rounded-lg h-full items-center bg-red-200 p-8 flex-col">
            <div className="flex items-center mb-2">
              <h2 className="text-red-800	text-2xl title-font font-medium">
                Not Found!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}