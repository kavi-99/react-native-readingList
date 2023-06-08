import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, Button, Linking, TouchableOpacity } from 'react-native';
import { StyleSheet, Dimensions } from 'react-native';
import DocumentPicker, { types } from 'react-native-document-picker'
import storage from '@react-native-firebase/storage';
import RNFetchBlob from 'rn-fetch-blob';

import Pdf from 'react-native-pdf';



export function ThirdScreen() {
     const [selectedFile, setSelectedFile] = useState(null);
     //const downloadUrl = useRef('')
     const [downloadUrl, setDownloadUrl] = useState('');

     const uploadFileToFirebaseStorage = async (file) => {
       const storageRef = storage().ref(); // Reference to the root of Firebase Storage

       // Create a unique filename for the PDF file
       const fileName = file.name;

       // Create a reference to the file
       const fileRef = storageRef.child(fileName);

       try {
         // Upload the file to Firebase Storage
         fileUri = selectedFile['fileCopyUri'].replace('file://', '');
         await fileRef.putFile(fileUri);

         console.log('File uploaded successfully!');

         // Get the download URL of the uploaded file
         setDownloadUrl(await fileRef.getDownloadURL());

         console.log('Download URL:', downloadUrl);
         // Do something with the download URL, such as saving it to a database
       } catch (error) {
         console.error('Error uploading file:', error);
       }
     };

     const handleFilePick = async () => {
       try {
         const res = await DocumentPicker.pick({
           type: [DocumentPicker.types.pdf],
           copyTo: 'cachesDirectory'
         });

         setSelectedFile(res[0]);
         console.log(res);
         console.log(selectedFile);
       } catch (error) {
         console.error('Error picking file:', error);
       }
     };

     const handleUpload = () => {
       if (selectedFile) {
         uploadFileToFirebaseStorage(selectedFile);
       } else {
         console.warn('No file selected.');
       }
     };

     const handleDownload = () => {
       Linking.openURL(downloadUrl);
     };

     return (
       <View style={{ flex: 1, alignItems: 'center', padding: 30}}>
              {/*<Text style={{fontSize: 20, color: 'black', marginTop: 16}}>
                          File Name: {selectedFile['name'] ? selectedFile['name'] : ''}
                          {'\n'}
                          Type: {selectedFile.type ? selectedFile.type : ''}
                          {'\n'}
                          File Size: {selectedFile.size ? selectedFile.size : ''}
                          {'\n'}
                          URI: {selectedFile.uri ? selectedFile.uri : ''}
                          {'\n'}
                          fileCopyUri: {selectedFile.fileCopyUri ? selectedFile.fileCopyUri : ''}
                          {'\n'}
              </Text>*/}
              <View style={{flexDirection:'row', width: '100%' , justifyContent: 'space-around', marginBottom: 20}}>
                <Button title='Pick File' onPress={ () => handleFilePick() } />
                <Button title='Upload' onPress={ () => handleUpload() } />
              </View>

              <Text style={{ fontSize: 17 }}>
                File: {selectedFile ? selectedFile['name'] : 'No file selected'}
              </Text>

              <TouchableOpacity onPress={handleDownload}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
                    {downloadUrl}
                </Text>
              </TouchableOpacity>

              {/* PDF view */}
              <View>
              <Pdf trustAllCerts = { false }
              source={{ uri: downloadUrl, cache: true }}
              style={{
                              flex:1,
                              justifyContent: 'center',
                              marginTop: 10,
                              width:Dimensions.get('window').width/1.2,
                              height:Dimensions.get('window').height,
                          }}/>
              </View>
       </View>
     );

   /*const [file, setFile] = useState('');
   //const FireBaseStorage = storage();

   const handleFileSelect = async () => {
     try{
       const doc = await DocumentPicker.pick();
       console.log('doc')
       console.log(doc[0]);
       setFile(doc[0]);
       //const path = getPathForFirebaseStorage(file['uri'])
       console.log(file['uri']);
      // console.log(path);
     }

     catch(error){
       //if (DocumentPicker.isCancel(error))
         console.log(error);
       //else
     }
   }

   /*async function getPathForFirebaseStorage(uri: string) {
     // The reason we have this function is that on android if the file comes from google photos we can't access it directly
     if (Platform.OS === 'ios') {
       return uri;
     }

     if (!uri.includes('content://com.google')) {
       return uri;
     }

     const stat = await RNFetchBlob.fs.stat(uri);
     return stat.path;
   }

   const handleFileUpload = async () => {
        try{
        //create reference
        console.log('in upload func !!!!!')
        console.log(file['uri']);
        console.log(file.name);
          const reference = storage().ref(file.name);
         // path to existing file on filesystem
          const pathToFile = file.uri;
         // uploads file
          await reference.putFile(pathToFile);
          //const response = await storage().ref('/test/testingFile.pdf').putFile(path);
          console.log('response')
          console.log(response);
          //setFile(doc[0]);
          //console.log(file['name']);
        }

        catch(error){
            console.log(error);
        }
      }

   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{ fontSize: 15 }}>Document Picker</Text>
       <Text style={{fontSize: 20, color: 'black', marginTop: 16}}>
                   File Name: {file.name ? file.name : ''}
                   {'\n'}
                   Type: {file.type ? file.type : ''}
                   {'\n'}
                   File Size: {file.size ? file.size : ''}
                   {'\n'}
                   URI: {file.uri ? file.uri : ''}
                   {'\n'}
       </Text>
       <View style={{flexDirection:'row', width: '100%' , justifyContent: 'space-around'}}>
         <Button title='Select File' onPress={ () => handleFileSelect() } />
         <Button title='Upload File' onPress={ () => handleFileUpload() } />
       </View>

     </View>
   );*/
 }
