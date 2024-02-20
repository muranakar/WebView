import React, { useRef } from "react";
import { View, StyleSheet, Button } from "react-native";
import { WebView } from "react-native-webview";

const MyWebView = () => {
  const webViewRef = useRef(null);

  const handleGoBack = () => {
    if (webViewRef.current) {
      webViewRef.current.goBack();
    }
  };

  const handleReload = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  const handleGoToSpecificUrl = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(
        `window.location.href = 'https://www.anime-chiikawa.jp/';`
      );
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{ uri: "https://www.google.com/" }}
        style={styles.webview}
      />
      <View style={styles.buttonContainer}>
        <Button title="戻る" onPress={handleGoBack} />
        <Button title="リロード" onPress={handleReload} />
        <Button title="特定のリンクへ遷移" onPress={handleGoToSpecificUrl} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginBottom: 40,
  },
  webview: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
});

export default MyWebView;
