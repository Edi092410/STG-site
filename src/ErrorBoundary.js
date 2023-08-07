// import { Component } from "react";
// import { PageNoteFound } from "./components/PageNoteFound/PageNoteFound";
// import { ServerErrorPage } from "./components/ServerErrorPage/ServerErrorPage";
// import { GenericErrorPage } from "./components/GenericErrorPage/GenericErrorPage";

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error("Error caught:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       if (this.state.error.status === 404) {
//         return <PageNoteFound />;
//       } else if (this.state.error.status === 500) {
//         return <ServerErrorPage />;
//       } else {
//         return <GenericErrorPage />;
//       }
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
