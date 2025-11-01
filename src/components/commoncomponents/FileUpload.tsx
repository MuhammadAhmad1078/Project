import React, { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import { ImagePreview } from './ImagePreview';
import { ButtonSecondary } from './ButtonSecondary';

export type FileUploadProps = {
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
};

export const FileUpload = ({
  multiple = false,
  maxFiles = 10,
  accept = 'image/*',
  files: controlledFiles,
  onFilesChange,
  children,
  className,
  title,
  disabled = false,
}: FileUploadProps) => {
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
      // Check file type
      if (accept && !file.type.match(new RegExp(accept.replace('*', '.*')))) {
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
          'border rounded-sm !border-[#2E7A80] border-dashed p-4 py-8 block w-full cursor-pointer transition-colors',
          dragActive ? 'border-primary bg-primary/10' : 'border-border',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {children || (
          <div className="flex flex-col items-center justify-center gap-1 text-center">
            <p className="font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">
              {multiple
                ? `Upload up to ${maxFiles}`
                : `Upload a single file (${accept})`}
            </p>
          </div>
        )}
      </label>

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {files.map((file, index) => (
            <div key={`${file.name}-${file.size}`} className="relative group">
              <div className="aspect-square overflow-hidden rounded-md bg-muted">
                {file.type.startsWith('image/') ? (
                  <ImagePreview
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-sm text-center p-2 break-all">
                      {file.name}
                    </div>
                  </div>
                )}
              </div>
              <ButtonSecondary
                type="button"
                onClick={() => removeFile(index)}
                className="absolute -top-2 -right-2 !border-0 !bg-transparent z-50 !h-auto rounded-full group-hover:!bg-transparent !p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                disabled={disabled}
              >
                <img src='/assets/icons/remove.png' className='w-7' />
              </ButtonSecondary>
              {/* <p className="text-xs text-muted-foreground mt-1 truncate">
                {file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {(file.size / 1024).toFixed(1)} KB
              </p> */}
            </div>
          ))}
        </div>
      )}

      {/* {multiple && files.length > 0 && (
        <p className="text-sm text-muted-foreground">
          {files.length} of {maxFiles} files selected
        </p>
      )} */}
    </div>
  );
};