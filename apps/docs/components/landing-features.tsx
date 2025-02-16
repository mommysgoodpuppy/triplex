/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */
import {
  LandingCardBody,
  LandingCardButton,
  LandingCardHeading,
  LandingCardIcon,
} from "./landing-card";
import { Tab, Tabs, TabsList, TabsRoot } from "./tabs";

export function LandingFeatures() {
  return (
    <div className="flex flex-col gap-14">
      <h2 className="font-brand text-brand max-w-4xl text-5xl font-medium md:text-6xl lg:text-7xl">
        Powerful features to build it how you see it
      </h2>

      <TabsRoot>
        <div className="-mx-8 overflow-auto pl-8 [scrollbar-width:none] lg:-mx-20 lg:pl-20 [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-[80rem] gap-6">
            <Tabs>
              <Tab>
                {({ isSelected, onClick }) => (
                  <LandingCardButton
                    onClick={onClick}
                    variant={isSelected ? "default" : "inverse"}
                  >
                    <LandingCardIcon />
                    <LandingCardHeading decoration="01.">
                      Feature Name
                    </LandingCardHeading>
                    <LandingCardBody>
                      Lorem ipsum dolor sit amet consectetur. Augue nibh felis
                      velit nisl mattis sapien. Amet varius in morbi tristique.
                    </LandingCardBody>
                  </LandingCardButton>
                )}
              </Tab>
              <Tab>
                {({ isSelected, onClick }) => (
                  <LandingCardButton
                    onClick={onClick}
                    variant={isSelected ? "default" : "inverse"}
                  >
                    <LandingCardIcon />
                    <LandingCardHeading decoration="02.">
                      Feature Name
                    </LandingCardHeading>
                    <LandingCardBody>
                      Lorem ipsum dolor sit amet consectetur. Augue nibh felis
                      velit nisl mattis sapien. Amet varius in morbi tristique.
                    </LandingCardBody>
                  </LandingCardButton>
                )}
              </Tab>
              <Tab>
                {({ isSelected, onClick }) => (
                  <LandingCardButton
                    onClick={onClick}
                    variant={isSelected ? "default" : "inverse"}
                  >
                    <LandingCardIcon />
                    <LandingCardHeading decoration="03.">
                      Feature Name
                    </LandingCardHeading>
                    <LandingCardBody>
                      Lorem ipsum dolor sit amet consectetur. Augue nibh felis
                      velit nisl mattis sapien. Amet varius in morbi tristique.
                    </LandingCardBody>
                  </LandingCardButton>
                )}
              </Tab>
              <Tab>
                {({ isSelected, onClick }) => (
                  <LandingCardButton
                    onClick={onClick}
                    variant={isSelected ? "default" : "inverse"}
                  >
                    <LandingCardIcon />
                    <LandingCardHeading decoration="04.">
                      Feature Name
                    </LandingCardHeading>
                    <LandingCardBody>
                      Lorem ipsum dolor sit amet consectetur. Augue nibh felis
                      velit nisl mattis sapien. Amet varius in morbi tristique.
                    </LandingCardBody>
                  </LandingCardButton>
                )}
              </Tab>
            </Tabs>
            <div className="w-2 flex-shrink-0 lg:w-14" />
          </div>
        </div>
        <div className="bg-surface border-neutral flex aspect-video items-center justify-center border">
          <TabsList>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (FEATURE_ONE_VIDEO)
            </div>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (FEATURE_TWO_VIDEO)
            </div>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (FEATURE_THREE_VIDEO)
            </div>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (FEATURE_FOUR_VIDEO)
            </div>
          </TabsList>
        </div>
      </TabsRoot>
    </div>
  );
}
