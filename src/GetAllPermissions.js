import { PermissionsAndroid } from 'react-native';
import { requestMultiple } from 'react-native-permissions';

export async function GetAllPermissions() {
  try {
    // if (Platform.OS === "android") {
      const userResponse = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        PermissionsAndroid.PERMISSIONS.CALL_PHONE
      ]);
      return userResponse;
    // }
  } catch (err) {
    alert(err);
  }
  return null;
}