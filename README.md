## 一、创建 Next.js app

```base
yarn create next-app --typescript

yarn dev
```

## 二、安装 Recoil

```base
yarn add recoil
```

## 三、安装 Storybook

```base
npx sb init

yarn storybook
```

> `.storybook/preview.js` 为 Storybook 配置 Next.js Images

```base
+ import * as NextImage from "next/image";

+ const OriginalNextImage = NextImage.default;

+ Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});
```

> `package.json` 为 Storybook 提供公共目录

```base
{
  ...
  
  "scripts": {
    - "storybook": "start-storybook -p 6006",
    - "build-storybook": "build-storybook"
    + "storybook": "start-storybook -p 6006 -s ./public",
    + "build-storybook": "build-storybook -s public"
  },
  
 ...

}
```

## 四、安装 antd

```base
yarn add antd
```

> `.storybook/preview.js` 为 Storybook 配置全局样式

```base
import 'antd/dist/antd.css';
```

