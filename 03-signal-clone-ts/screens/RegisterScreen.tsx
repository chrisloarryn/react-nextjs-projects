import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

const RegisterScreen = () => {
  return (
    <KeyboardAvoidingView>
      <StatusBar style='light' />
      <Text style={{ marginBottom: '' }}>Create a Signal account</Text>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {}
})
