import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Topbar from "../../components/Topbar/Topbar";

import "./CourseInfo.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import CourseDetailBox from "../../components/CourseDetailBox/CourseDetailBox";

export default function CourseInfo() {
  return (
    <>
      <Topbar />
      <Navbar />

      <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "" },
          {
            id: 2,
            title: "آموزش برنامه نویسی فرانت‌اند",
            to: "category-info/frontend",
          },
          {
            id: 3,
            title: "دوره متخصص جاوا اسکریپت",
            to: "course-info/js-expert",
          },
        ]}
      />

      <section class="course-info">
        <div class="container">
          <div class="row">
            <div class="col-6">
              <a href="#" class="course-info__link">
                آموزش برنامه نویسی فرانت اند
              </a>
              <h1 class="course-info__title">
                آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
              </h1>
              <p class="course-info__text">
                امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند.
                به قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با
                Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک
                های موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس
                عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار
                استفاده می شوند را به خوبی بلد باشید
              </p>
              <div class="course-info__social-media">
                <a href="#" class="course-info__social-media-item">
                  <i class="fab fa-telegram-plane course-info__icon"></i>
                </a>
                <a href="#" class="course-info__social-media-item">
                  <i class="fab fa-twitter course-info__icon"></i>
                </a>
                <a href="#" class="course-info__social-media-item">
                  <i class="fab fa-facebook-f course-info__icon"></i>
                </a>
              </div>
            </div>

            <div class="col-6">
              <video
                src=""
                poster="/images/courses/js_project.png"
                class="course-info__video"
                controls
              ></video>
            </div>
          </div>
        </div>
      </section>

      <main class="main">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div class="course">
                <div class="course-boxes">
                  <div class="row">
                    <CourseDetailBox
                      icon="graduation-cap"
                      title="وضعیت دوره:"
                      text="به اتمام رسیده"
                    />
                    <CourseDetailBox
                      icon="clock"
                      title=" مدت زمان دوره:"
                      text="19 ساعت"
                    />
                    <CourseDetailBox
                      icon="calendar-alt"
                      title="آخرین بروزرسانی:"
                      text="1401/03/02"
                    />
                    <CourseDetailBox
                      icon="graduation-cap"
                      title="وضعیت دوره:"
                      text="به اتمام رسیده"
                    />
                    <CourseDetailBox
                      icon="clock"
                      title=" مدت زمان دوره:"
                      text="19 ساعت"
                    />
                    <CourseDetailBox
                      icon="calendar-alt"
                      title="آخرین بروزرسانی:"
                      text="1401/03/02"
                    />
                  </div>
                </div>
                {/* Start Course Progress */}
                <div class="course-progress">
                  <div class="course-progress__header">
                    <i class="fas fa-chart-line course-progress__icon"></i>
                    <span class="course-progress__title">
                      درصد پیشرفت دوره: 100%
                    </span>
                  </div>
                  <div class="progress course-progress__bar">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-label="Animated striped example"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                {/* Finish Course Progress */}

                {/* Start Introduction */}

                <div class="introduction">
                  <div class="introduction__item">
                    <span class="introduction__title title">
                      آموزش 20 کتابخانه جاوا اسکریپت مخصوص بازار کار
                    </span>
                    <img
                      src="/images/info/1.gif"
                      alt="course info image"
                      class="introduction__img img-fluid"
                    />
                    <p class="introduction__text">
                      کتابخانه های بسیار زیادی برای زبان جاوا اسکریپت وجود دارد
                      و سالانه چندین کتابخانه جدید نیز به این لیست اضافه می شود
                      که در بازار کار به شدت از آن ها استفاده می شود و اگر بدون
                      بلد بودن این کتابخانه ها وارد بازار کار شوید، خیلی اذیت
                      خواهید شد و حتی ممکن است ناامید شوید!
                    </p>
                    <p class="introduction__text">
                      در این دوره نحوه کار با 20 مورد از پر استفاده ترین
                      کتابخانه های جاوا اسکریپت به صورت پروژه محور به شما عزیزان
                      آموزش داده می شود تا هیچ مشکلی برای ورود به بازار کار
                      نداشته باشید
                    </p>
                  </div>
                  <div class="introduction__item">
                    <span class="introduction__title title">
                      هدف از این دوره چیست؟ (تنها راه ورود به بازار کار و کسب
                      درآمد)
                    </span>
                    <img
                      src="/images/info/2.jpg"
                      alt="course info image"
                      class="introduction__img img-fluid"
                    />
                    <p class="introduction__text">
                      وقتی برای اولین بار وارد یکی از شرکت های برنامه نویسی شدم،
                      از کتابخانه هایی به اسم Lodash و Formik استفاده می شد، در
                      حالی که من اولین بارم بود اسم Formik را می شنیدم و تا اون
                      موقع از این کتابخانه ها استفاده نکرده بودم.
                    </p>
                    <p class="introduction__text">
                      همینجا بود که متوجه شدم کتابخانه های جاوا اسکریپت یکی از
                      مهم ترین مباحثی هستند که هر برنامه نویس وب برای ورود به
                      بازار کار و کسب درآمد بهتر، راحت و بیشتر باید با آن ها کار
                      کرده باشد{" "}
                    </p>
                    <p class="introduction__text">
                      همان طور که از اسم این دوره مشخص است، هدف از این دوره
                      آموزش 20 مورد از کاربردی ترین و پر استفاده ترین کتابخانه
                      های جاوا اسکریپت است تا شما بتوانید بعد از این دوره با
                      قدرت و آمادگی بیشتر ادامه مسیر برنامه نویسی وب را ادامه
                      دهید، ری اکت یا نود یا … را راحت تر یاد بگیرید و در نهایت
                      وارد بازار کار شده و کسب درآمد کنید.
                    </p>
                    <p class="introduction__text">
                      شا به عنوان یک برنامه نویس وب، حداقل اگر با کتابخانه خاصی
                      کار نکرده باشید، باید بلد باشید که چطور باید یک کتابخانه
                      جدید را یاد بگیرید. فرض کنید یک یک کتابخانه جدید ساخته شد.
                      آیا شما باید منتظر دوره آموزشی باشید؟! قطعا نه.
                    </p>
                    <p class="introduction__text">
                      در این دوره سعی کردیم علاوه بر آموزش مستقیم هر کتابخانه،
                      نحوه یادگیری یک کتابخانه جدید را نیز به شما عزیزان آموزش
                      دهیم تا بعد از گذراندن دوره، دیگر وابسته هیچ دوره یا شخص
                      خاصی نباشید و اگر کتابخانه جدیدی به دنیای جاوا اسکریپت و
                      وب اضافه شد، به راحتی بتوانید آن را یاد بگیرید.
                    </p>
                  </div>
                  <div class="introduction__btns">
                    <a href="#" class="introduction__btns-item">
                      دانلود همگانی ویدیوها
                    </a>
                    <a href="#" class="introduction__btns-item">
                      دانلود همگانی پیوست‌ها
                    </a>
                  </div>

                  <div class="introduction__topic">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            معرفی دوره
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          class="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div class="accordion-body introduction__accordion-body">
                            <div class="introduction__accordion-right">
                              <span class="introduction__accordion-count">
                                1
                              </span>
                              <i class="fab fa-youtube introduction__accordion-icon"></i>
                              <a href="#" class="introduction__accordion-link">
                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                              </a>
                            </div>
                            <div class="introduction__accordion-left">
                              <span class="introduction__accordion-time">
                                18:34
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion" id="accordionExample2">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            معرفی دوره
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample2"
                        >
                          <div class="accordion-body introduction__accordion-body">
                            <div class="introduction__accordion-right">
                              <span class="introduction__accordion-count">
                                1
                              </span>
                              <i class="fab fa-youtube introduction__accordion-icon"></i>
                              <a href="#" class="introduction__accordion-link">
                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                              </a>
                            </div>
                            <div class="introduction__accordion-left">
                              <span class="introduction__accordion-time">
                                18:34
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion" id="accordionExample3">
                      <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                          <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            معرفی دوره
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          class="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample3"
                        >
                          <div class="accordion-body introduction__accordion-body">
                            <div class="introduction__accordion-right">
                              <span class="introduction__accordion-count">
                                1
                              </span>
                              <i class="fab fa-youtube introduction__accordion-icon"></i>
                              <a href="#" class="introduction__accordion-link">
                                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
                              </a>
                            </div>
                            <div class="introduction__accordion-left">
                              <span class="introduction__accordion-time">
                                18:34
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Finish Introduction */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
