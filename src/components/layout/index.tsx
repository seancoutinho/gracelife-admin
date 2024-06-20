import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd'
import Header from './header'
import { AppstoreAddOutlined } from '@ant-design/icons'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => (
        <ThemedTitleV2
          {...titleProps}
          text="GRACELIFE ADMIN"
          icon={<AppstoreAddOutlined size={48} style={
            {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              color: "#088b1e",
              textAlign: "center",
              height: "100%",
              whiteSpace: "nowrap",
              width: "100%",
            }
          } />}
        />
      )}>
      {children}
    </ThemedLayoutV2>
  );
}

export default Layout;
