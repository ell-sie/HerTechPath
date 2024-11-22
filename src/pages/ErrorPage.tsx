// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ErrorIcon from "../assets/ErrorIcon";
// // import { Links } from "../routes/navigationLinks";

// interface ErrorPageProps {
//   message?: string;
// }

// export default function ErrorPage({ message }: ErrorPageProps) {
//   const navigate = useNavigate();
//   return (
//     <section className="h-full place-content-center">
//       <div className="grid items-center gap-4 p-10 md:grid-cols-2">
//         <div className="grid gap-2 text-center">
//           <p className="text-3xl font-thin text-white">
//             {message
//               ? message
//               : "Ooops! Something went wrong. We will solve your issue soon"}
//           </p>
//           <div>
//             <Button
//               onClick={() => {
//                 navigate(Links.Root);
//               }}
//               variant="outlined"
//               className="m-2 w-1/2 rounded-md p-2 text-black"
//             >
//               Go back !
//             </Button>
//           </div>
//         </div>
//         <ErrorIcon className="w-full" />
//       </div>
//     </section>
//   );
// }
