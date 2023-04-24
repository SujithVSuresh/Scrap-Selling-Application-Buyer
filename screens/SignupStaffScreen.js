import { View, Text, StyleSheet, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { staffProfileCreatorAction } from '../redux/actions/userActions';

const SignupStaffScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const dispatch = useDispatch()
    const staffProfileCreator = useSelector(state => state.staffProfileCreator)
    const {userInfo, loading, error} = staffProfileCreator

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
      }, []);
    

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        dispatch(staffProfileCreatorAction(data))
        console.log("ooi54")
        
      };
    
      if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
      }
      if (hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>

<View style={{width:"100%", height:"100%", position:"absolute", justifyContent:"space-between", zIndex:1, backgroundColor:"rgba(52, 52, 52, 0.)"}}>
    <View style={{flex:1, backgroundColor:"white"}}></View>
    <View style={{flex:1, flexDirection:"row", justifyContent:"space-between",}}>
        <View style={{backgroundColor:"white", width:'20%', height:'100%'}}>

        </View>
        <View style={{backgroundColor:"white", width:'20%', height:'100%'}}>

        </View>
    </View>
    <View style={{flex:1, backgroundColor:"white"}}></View>
</View>

    <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}
    />
    {/*scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />*/}
    {loading && <Text>Loading</Text>}
    {error && <Text>{error}</Text>}
    
    </View>
  
  )
}

export default SignupStaffScreen