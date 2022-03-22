import React, { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker';

function App() {
  const [openPicker, data] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId:
        '301408928475-0n8evjvagpagt2mkna4499di8a7v2qi1.apps.googleusercontent.com',
      developerKey: 'AIzaSyDbAkIwa3h1L7GvX-cYJFRw2_Z_52m3NzA',
      token:
        'ya29.A0ARrdaM8vCDXuOLgEoobNilaidfXVhW6gDCTPgw8RAKYbFZOS4s43fwcpmklRqg3k_pYQfcCS3nahrxYKPo3USbgmJvQ6hwdOoLD6FekWQCTw_0ds7uxV_lJocdKAmJ5a6DhTSwuc0CX6B73zEYcoIJ00JXBW',
      viewId: 'DOCS',
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    });
  };

  useEffect(() => {
    if (data) {
      data.docs.map((i) => console.log(i));
    }
  }, [data]);

  return (
    <div>
      <button onClick={() => handleOpenPicker()}>Open Picker</button>
    </div>
  );
}

export default App;
