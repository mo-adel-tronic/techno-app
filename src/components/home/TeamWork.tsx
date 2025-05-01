import { ImageSrc } from "@/lib/constants";
import { AppImage } from "../shared/AppImage";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const teamworkData = {
  title: "فريق العمل",
  teams: [
    {
      img: ImageSrc.TEAM_WORK_1,
      alt: "teamwork 1",
      title: "فريق التحليل",
      color: "red",
      describtion:
        "تعرف على فريق التحليل الذي قام بتحليل النظام وتحديد متطلباته. هذا الفريق هو العمود الفقري لأي مشروع ناجح، حيث يقوم بجمع المعلومات وفهم احتياجات المستخدمين لضمان أن النظام يلبي توقعاتهم.",
      teammates: [
        {
          img: ImageSrc.TEAM_WORK_1,
          alt: "teamwork 1",
          name: "أ.د/ هويدا سعيد",
          title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_2,
          alt: "teamwork 2",
          name: "د/ أحمد محمد",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_3,
          alt: "teamwork 3",
          name: "د/ سارة علي",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_1,
          alt: "teamwork 1",
          name: "أ.د/ هويدا سعيد",
          title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_2,
          alt: "teamwork 2",
          name: "د/ أحمد محمد",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_3,
          alt: "teamwork 3",
          name: "د/ سارة علي",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_1,
          alt: "teamwork 1",
          name: "أ.د/ هويدا سعيد",
          title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_2,
          alt: "teamwork 2",
          name: "د/ أحمد محمد",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_3,
          alt: "teamwork 3",
          name: "د/ سارة علي",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
      ],
    },

    {
        img: ImageSrc.TEAM_WORK_2,
        alt: "teamwork 2",
        title: "فريق التصميم الجرافيكي",
        color: "green",
        describtion:
          "تعرف على فريق التحليل الذي قام بتحليل النظام وتحديد متطلباته. هذا الفريق هو العمود الفقري لأي مشروع ناجح، حيث يقوم بجمع المعلومات وفهم احتياجات المستخدمين لضمان أن النظام يلبي توقعاتهم.",
        teammates: [
          {
            img: ImageSrc.TEAM_WORK_1,
            alt: "teamwork 1",
            name: "أ.د/ هويدا سعيد",
            title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_2,
            alt: "teamwork 2",
            name: "د/ أحمد محمد",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_3,
            alt: "teamwork 3",
            name: "د/ سارة علي",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_1,
            alt: "teamwork 1",
            name: "أ.د/ هويدا سعيد",
            title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_2,
            alt: "teamwork 2",
            name: "د/ أحمد محمد",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_3,
            alt: "teamwork 3",
            name: "د/ سارة علي",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_1,
            alt: "teamwork 1",
            name: "أ.د/ هويدا سعيد",
            title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_2,
            alt: "teamwork 2",
            name: "د/ أحمد محمد",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_3,
            alt: "teamwork 3",
            name: "د/ سارة علي",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
        ],
      },
    {
      img: ImageSrc.TEAM_WORK_1,
      alt: "teamwork 1",
      title: "فريق التحليل",
      color: "blue",
      describtion:
        "تعرف على فريق التحليل الذي قام بتحليل النظام وتحديد متطلباته. هذا الفريق هو العمود الفقري لأي مشروع ناجح، حيث يقوم بجمع المعلومات وفهم احتياجات المستخدمين لضمان أن النظام يلبي توقعاتهم.",
      teammates: [
        {
          img: ImageSrc.TEAM_WORK_1,
          alt: "teamwork 1",
          name: "أ.د/ هويدا سعيد",
          title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_2,
          alt: "teamwork 2",
          name: "د/ أحمد محمد",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_3,
          alt: "teamwork 3",
          name: "د/ سارة علي",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_1,
          alt: "teamwork 1",
          name: "أ.د/ هويدا سعيد",
          title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_2,
          alt: "teamwork 2",
          name: "د/ أحمد محمد",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_3,
          alt: "teamwork 3",
          name: "د/ سارة علي",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_1,
          alt: "teamwork 1",
          name: "أ.د/ هويدا سعيد",
          title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_2,
          alt: "teamwork 2",
          name: "د/ أحمد محمد",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
        {
          img: ImageSrc.TEAM_WORK_3,
          alt: "teamwork 3",
          name: "د/ سارة علي",
          title: "مدرس مساعد بقسم تكنولوجيا التعليم",
        },
      ],
    },

    {
        img: ImageSrc.TEAM_WORK_2,
        alt: "teamwork 2",
        title: "فريق التصميم الجرافيكي",
        color: "orange",
        describtion:
          "تعرف على فريق التحليل الذي قام بتحليل النظام وتحديد متطلباته. هذا الفريق هو العمود الفقري لأي مشروع ناجح، حيث يقوم بجمع المعلومات وفهم احتياجات المستخدمين لضمان أن النظام يلبي توقعاتهم.",
        teammates: [
          {
            img: ImageSrc.TEAM_WORK_1,
            alt: "teamwork 1",
            name: "أ.د/ هويدا سعيد",
            title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_2,
            alt: "teamwork 2",
            name: "د/ أحمد محمد",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_3,
            alt: "teamwork 3",
            name: "د/ سارة علي",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_1,
            alt: "teamwork 1",
            name: "أ.د/ هويدا سعيد",
            title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_2,
            alt: "teamwork 2",
            name: "د/ أحمد محمد",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_3,
            alt: "teamwork 3",
            name: "د/ سارة علي",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_1,
            alt: "teamwork 1",
            name: "أ.د/ هويدا سعيد",
            title: "أستاذ ورئيس قسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_2,
            alt: "teamwork 2",
            name: "د/ أحمد محمد",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
          {
            img: ImageSrc.TEAM_WORK_3,
            alt: "teamwork 3",
            name: "د/ سارة علي",
            title: "مدرس مساعد بقسم تكنولوجيا التعليم",
          },
        ],
      },
  ],
};

export default function TeamWork() {
  return (
    <section className="lg-content-padding bg-app-card my-8 py-8">
      <h2 className="text-center text-white text-2xl mb-14">
        {teamworkData.title}
      </h2>
      <div className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-9 text-center">
        {teamworkData.teams.map((team, index) => (
          <div
            key={index}
            className={`border-2 pb-8 bg-white border-gray-400 hover:[&>.img-box:after]:border-y-[170px] hover:[&>.img-box:after]:border-r-[500px] hover:[&>.img-box:after]:border-l-0 ${team.color == 'red' ? 'hover:[&>.more-btn]:bg-red-400': ''} ${team.color == 'green' ? 'hover:[&>.more-btn]:bg-green-400': ''} ${team.color == 'blue' ? 'hover:[&>.more-btn]:bg-blue-400': ''} ${team.color == 'orange' ? 'hover:[&>.more-btn]:bg-orange-400': ''} hover:[&>.more-btn]:text-white`}
          >
            <div className={`img-box relative overflow-hidden before:absolute before:right-0 before:-top-[1px] before:w-full before:h-full after:absolute after:bottom-0 after:left-0 after:border-t-0 after:border-b-[170px] after:border-l-[500px] after:border-r-0 after:border-transparent after:border-b-white after:transition-all after:duration-300 ${team.color == 'red' ? 'before:bg-red-400/60': ''} ${team.color == 'green' ? 'before:bg-green-400/60': ''} ${team.color == 'blue' ? 'before:bg-blue-400/60': ''} ${team.color == 'orange' ? 'before:bg-orange-400/60': ''}`}>
              <AppImage
                src={team.img}
                alt={team.alt}
                width={300}
                height={300}
                className="w-full"
              />
            </div>
            <h3 className={`text-app-foreground after:block after:w-20 after:border-b-4 after:mx-auto after:my-2 ${team.color == 'red' ? 'after:border-b-red-400': ''} ${team.color == 'green' ? 'after:border-b-green-400': ''} ${team.color == 'blue' ? 'after:border-b-blue-400': ''} ${team.color == 'orange' ? 'after:border-b-orange-400': ''}`}>
              {team.title}
            </h3>
            <p className="font-madani text-sm leading-8 px-2 text-app-text mb-16">
              {team.describtion}
            </p>

            <Drawer>
              <DrawerTrigger className={`more-btn border-2 px-8 py-2 transition-all duration-300 ${team.color == 'red' ? 'border-red-400 text-red-400': ''} ${team.color == 'green' ? 'border-green-400 text-green-400': ''} ${team.color == 'blue' ? 'border-blue-400 text-blue-400': ''} ${team.color == 'orange' ? 'border-orange-400 text-orange-400': ''}`}>
                تعرف على أعضاء الفريق
              </DrawerTrigger>
              <DrawerContent className="bg-app-background">
                <DrawerHeader className="text-center">
                  <DrawerTitle className="text-app-primary">
                    {team.title}
                  </DrawerTitle>
                  <DrawerDescription className="flex items-center justify-center flex-wrap gap-4 mt-4 overflow-y-scroll h-[20rem]">
                    {team.teammates.map((teammate, i) => (
                      <div key={i} className="w-1/3 md:w-1/5 relative overflow-hidden hover:[&>div]:bottom-0">
                        <AppImage
                          src={teammate.img}
                          alt={teammate.alt}
                          width={150}
                          height={150}
                          className="w-full grayscale transition-all duration-300 hover:grayscale-0"
                        />
                        <div className="absolute bottom-[-80px] right-0 w-full h-[80px] bg-app-background text-center text-app-text font-madani transition-all duration-300 flex items-center justify-center text-lg flex-col">
                          <div>{teammate.name}</div>
                          <div className="text-sm text-app-hover">
                            {teammate.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter className="flex justify-center">
                  <DrawerClose className="bg-red-500 text-white px-4 py-2 rounded-md md:w-1/6 mx-auto">
                    إغلاق
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        ))}
      </div>
    </section>
  );
}
