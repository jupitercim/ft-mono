import React, { useState, ChangeEvent, useCallback, useEffect } from 'react';
import uploaderImageSrc from '@/assets/images/folder-upload@2x.png';
import { Box, CircularProgress, List, ListItem } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { uploadFile } from '@/api/uploadFile';
import { ChangeHandler, Control } from 'react-hook-form';

const useStyles = makeStyles()(() => {
  return {
    hiddenInput: {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      cursor: 'pointer',
      width: '100%',
      height: '100%',
      zIndex: 1,
    },
  };
});

interface FileItem {
  name: string;
  loading: boolean;
  link?: string
}

interface UploaderProps {
  onChange?: (files: string[]) => void;
}

export const Uploader: React.FC<UploaderProps> = ({onChange}) => {

  const { classes } = useStyles();
  const [fileList, setFileList] = useState<FileItem[]>([]);

  useEffect(() => {
    onChange?.(fileList.map(x => x.link).filter(x => x) as string[]);
  }, [fileList])

  const update = useCallback(async (file: File) => {

    const result = await uploadFile(file)
    setFileList(prev => {
      return prev.map(item => {
        if (item.name === file.name) {
          return {
            ...item,
            loading: false,
            link: result
          }
        }
        return item
      })
    })
  }, [])

  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFileList = Array.from(files).map(file => ({
        name: file.name,
        loading: true,
      }));
      setFileList(newFileList);
      for(let i = 0; i < files.length; i++) {
        update(files[i])
      }
    }
  };

  return (
    <Box
      position={'relative'}
      style={{
        padding: '14px 10px',
        background: '#2B303A',
      }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        position={'relative'}
      >
        <div
          style={{
            flex: 1,
          }}
        ></div>
        <div>
          <img
            style={{
              width: '22px',
              height: '22px',
            }}
            src={uploaderImageSrc}
          />
        </div>
        <input
          type="file"
          multiple
          className={classes.hiddenInput}
          onChange={handleFileUpload}
        />
      </Box>
      {fileList.length > 0 && (
        <Box
          display={'flex'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          alignItems={'flex-start'}
        >
          {fileList.map((file, index) => (
            <div
              key={index}
              style={{ marginRight: '10px', background: 'rgba(0,0,0,.3)' }}
            >
              {file.loading ? <CircularProgress size={20} /> : file.name}
            </div>
          ))}
        </Box>
      )}
    </Box>
  );
};
