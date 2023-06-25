import Image from "next/image";
import * as React from "react";
import Profile from "src/assets/download.jpg";
import { RootState, AppDispatch, useDispatch } from "src/redux/store";
import { userAction } from "src/redux/slices/userSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import useOnScreen from "src/utils/customHooks/useOnScreen";
import Seo from "components/Seo";
import Layout from "components/layouts/Layout";
import useLoaded from "src/utils/customHooks/useLoaded";
import { useScrollBehavior } from "src/utils/customHooks/useScrollBehavior";
import SectionLayout from "components/layouts/SectionLayout";
import Typography from "components/typography/Typography";

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const childRef = React.useRef(null);
  const childRefValue = useOnScreen(childRef);
  const [isChildRef, setIsChildRef] = React.useState(false);

  // const router = useRouter();
  // const trialRef = useRef<HTMLInputElement>(null);
  // const [name, setName] = React.useState("name");
  // const cekRedux = useSelector((state: RootState) => state.auth);
  // const isLoaded = useLoaded();
  // const scrollBehavior = () => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: trialRef.current?.offsetTop,
  //     left: 0,
  //   });
  // };

  React.useEffect(() => {
    // dispatch(userAction.getUserHistoryThunk(cekRedux.token))
    // .unwrap()
    // .then(() => {
    //   console.log("success");
    // })
    //   .catch((err) => {
    // dispatch(authAction.authLoginThunk({ email: "fail", password: "fail" }));
    //     console.log("error");
    //   });
    if (!isChildRef) {
      setIsChildRef(childRefValue);
    }
  }, [isChildRef, childRefValue]);
  // const isLoaded = useLoaded();

  return (
    <>
      <Seo title="Homie" />
      <Layout>
        <article>
          {/* <Typography /> */}
          <SectionLayout className="flex flex-col slideAppear slideDown">
            <div data-fade="5">Hi, my name is</div>
            <div data-fade="6">Zanuar Bagus Ramadhan.</div>
            <div data-fade="7">
              I am a software engineer specializing in designing user interfaces
              and user experiences, for web and mobile applications.
            </div>
            <div data-fade="8">
              Currently i am working as a Front-End Engineer at PT Tricada
              Intronik, Bandung, Jawa Barat
            </div>
            {/* <div>{cekRedux.token}</div> */}
          </SectionLayout>
          <SectionLayout>
            <p>Trial</p>
          </SectionLayout>
          {/* <section className="flex justify-center items-center">
            <button
              id="down"
              onClick={async () => {
                try {
                  const getHistory = await dispatch(
                    userAction.getUserHistoryThunk(cekRedux.token)
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Tes API
            </button>
          </section>
          <section ref={trialRef} className="flex justify-center items-center">
            <button
              onClick={() => {
                toast.error("Error");
                toast.success("Success");
              }}
            >
              Tes Toast
            </button>
          </section> */}
        </article>
        {/* <div className="flex justify-center" ref={childRef}>
          {childRefValue && (
            <Image alt="trial" src={Profile} className="animate-spreadOut" />
          )}
        </div> */}
      </Layout>
    </>
  );
}
