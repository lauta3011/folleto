import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function Magazine({ file }) {
    const [numPages, setNumPages] = useState(null);
    const [size, _] = useState({ width: window.innerWidth, height: window.innerHeight });

    function onDocumentLoadSuccess({numPages}) {
      setNumPages(numPages);
    }
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Document file={file} onLoadSuccess={(e) => onDocumentLoadSuccess(e)}>
          {numPages && (
            <HTMLFlipBook
              width={size.width}
              height={size.height}
            >
            {Array.from(new Array(numPages), (_, index) => (
                <div
                  key={`page_${index + 1}`}
                  style={{
                    width:`${size.width}px`,
                    height:`${size.height}px`,
                    backgroundColor: 'white',
                  }}
                >
                  <Page
                    pageNumber={index + 1}
                    width={size.width}
                    height={size.height}
                    renderMode="canvas"
                  />
                </div>
              ))}
            </HTMLFlipBook>
         )}
        </Document>
      </div>
    );
}

export default Magazine;
