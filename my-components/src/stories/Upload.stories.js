import Upload from '../components/Upload/index.js';

export default {
  title: 'Component/Upload',
  component: Upload,
  argTypes: {},
};

export const Default = () => {
  return (
    <Upload>
      <button>Click me</button>
    </Upload>
  );
};

export const AccessFile = () => {
  return (
    <Upload>{file => <button>{file ? file.name : 'Click me'}</button>}</Upload>
  );
};

export const Droppable = () => {
  return (
    <Upload droppable>
      {(file, dragging) => (
        <div
          style={{
            width: 300,
            height: 100,
            border: '4px dashed #aaa',
            borderColor: dragging ? '#000' : '#aaa',
          }}
        >
          {file ? file.name : 'Click or drag file to this area to upload'}
        </div>
      )}
    </Upload>
  );
};
