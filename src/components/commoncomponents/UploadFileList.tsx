import React, { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { ButtonSecondary } from './ButtonSecondary';
import { X } from 'lucide-react';

export type FileUploadListprops = {
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum number of files allowed */
  maxFiles?: number;
  /** Accepted file types (e.g., "image/*") */
  accept?: string;
  /** Current files (controlled component) */
  files?: File[];
  /** Callback when files change */
  onFilesChange?: (files: File[]) => void;
  /** Custom upload area content */
  children?: React.ReactNode;
  /** Class names for styling */
  className?: string;
  title?: string;
  /** Disable the upload */
  disabled?: boolean;
  labelClass?: string;
};

const UploadFileList = ({
  multiple = false,
  maxFiles = 10,
  accept = '*/*',
  files: controlledFiles,
  onFilesChange,
  children,
  className,
  title,
  disabled = false,
  labelClass,
}: FileUploadListprops) => {
  const [uncontrolledFiles, setUncontrolledFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledFiles !== undefined;
  const files = isControlled ? controlledFiles : uncontrolledFiles;

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (disabled) return;
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [disabled]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (disabled) return;
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      // Reset input value to allow selecting the same file again
      e.target.value = '';
    }
  };

  const handleFiles = (newFiles: FileList) => {
    const validFiles = Array.from(newFiles).filter((file) => {
      // Check file type if accept is specified
      if (accept && accept !== '*/*' && !file.type.match(new RegExp(accept.replace('*', '.*')))) {
        return false;
      }
      // Check for duplicates
      return !files.some((f) => f.name === file.name && f.size === file.size);
    });

    let updatedFiles: File[];
    if (multiple) {
      updatedFiles = [...files, ...validFiles].slice(0, maxFiles);
    } else {
      updatedFiles = validFiles.slice(0, 1);
    }

    if (isControlled) {
      onFilesChange?.(updatedFiles);
    } else {
      setUncontrolledFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    if (isControlled) {
      onFilesChange?.(updatedFiles);
    } else {
      setUncontrolledFiles(updatedFiles);
      onFilesChange?.(updatedFiles);
    }
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return '/assets/icons/image.png';
    } else if (file.type.startsWith('video/')) {
      return '/assets/icons/video.png';
    } else if (file.type === 'application/pdf') {
      return '/assets/icons/pdf.png';
    } else {
      return '/assets/icons/file.png';
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      <input
        className="hidden"
        type="file"
        id="file-upload"
        multiple={multiple}
        accept={accept}
        onChange={handleChange}
        disabled={disabled}
      />
      <label
        htmlFor="file-upload"
        className={cn(
          'border rounded-sm border-dashed p-4 py-8 block w-full cursor-pointer transition-colors !border-[#2E7A80]',
          dragActive ? 'border-primary bg-primary/10' : 'border-border',
          disabled && 'cursor-not-allowed opacity-50',
          labelClass
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {children || (
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <p className="font-medium">{title || 'Upload files'}</p>
            <p className="text-sm text-muted-foreground">
              {multiple
                ? `Drag & drop files here or click to browse (max ${maxFiles})`
                : 'Drag & drop a file here or click to browse'}
            </p>
          </div>
        )}
      </label>

      {files.length > 0 && (
        <div className={`space-y-2 overflow-x-hidden overflow-y-auto no-scrollbar ${files.length > 2 ? 'h-[100px]':''}`}>
          {files.map((file, index) => (
            <div 
              key={`${file.name}-${file.size}`} 
              className="flex items-center justify-between rounded-sm p-2 bg-[#0C666A]"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                  {file.type.startsWith('image/') ? (
                    <img 
                      src={URL.createObjectURL(file)} 
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={getFileIcon(file)} 
                      alt={file.type.split('/')[0]}
                      className="w-6 h-6"
                    />
                  )}
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white line-clamp-1">{file.name.slice(0, 35 - 3)}</p>
                  {/* <p className="text-muted-foreground text-xs">
                    {(file.size / 1024).toFixed(1)} KB
                  </p> */}
                </div>
              </div>
              <ButtonSecondary
                type="button"
                onClick={() => removeFile(index)}
                className="!border-0 !bg-transparent !h-auto !p-1"
                disabled={disabled}
              >
                <X className='w-4 text-red-500' />
              </ButtonSecondary>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { UploadFileList };