import { pdfjs } from 'react-pdf';

// Set the workerSrc to the worker file from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
