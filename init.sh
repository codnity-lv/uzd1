#mkdir -p src/{components,store}
#touch src/{App.tsx,index.tsx} \
#      src/store/index.ts \
#      src/components/{Header.tsx,Footer.tsx,HomePage.tsx,AboutPage.tsx,ContactPage.tsx}
#mkdir public
npx create-react-app . --template typescript
npm install @mui/material @emotion/react @emotion/styled redux react-redux axios
npm install react-router-dom @types/react-router-dom @mui/icons-material
