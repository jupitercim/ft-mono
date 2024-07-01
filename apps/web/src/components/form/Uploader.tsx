import React, { useState, ChangeEvent } from 'react';
import uploaderImageSrc from '@/assets/images/folder-upload@2x.png';
import { Box, List, ListItem } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

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
}

export const Uploader: React.FC = () => {
  const { classes } = useStyles();
  const [fileList, setFileList] = useState<FileItem[]>([]);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFileList = Array.from(files).map(file => ({ name: file.name }));
      setFileList(newFileList);
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
        <List
          style={{
            width: '100%',
            marginTop: '10px',
            background: '#ffffff',
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          {fileList.map((file, index) => (
            <ListItem key={index} style={{ padding: '5px 0' }}>
              {file.name}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
