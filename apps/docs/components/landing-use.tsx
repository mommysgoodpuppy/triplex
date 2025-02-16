/**
 * Copyright (c) 2022—present Michael Dougall. All rights reserved.
 *
 * This repository utilizes multiple licenses across different directories. To
 * see this files license find the nearest LICENSE file up the source tree.
 */

import { LandingButton, LandingLink } from "./landing-button";
import {
  LandingCard,
  LandingCardBody,
  LandingCardHeading,
  LandingCardIcon,
} from "./landing-card";
import { Tab, Tabs, TabsList, TabsRoot } from "./tabs";

export function LandingUseTriplexAnywhere() {
  return (
    <div className="grid gap-10 overflow-hidden lg:-mr-20 lg:grid-cols-2 lg:gap-32">
      <TabsRoot>
        <div className="flex flex-col gap-10 lg:py-20">
          <h2 className="font-brand text-brand text-center text-5xl font-medium md:text-6xl lg:text-7xl">
            Use Triplex on any project
          </h2>

          <div className="flex justify-center gap-3">
            <Tabs>
              <Tab>
                {(props) => <LandingButton {...props}>Web Apps</LandingButton>}
              </Tab>
              <Tab>
                {(props) => <LandingButton {...props}>Web Games</LandingButton>}
              </Tab>
              <Tab>
                {(props) => <LandingButton {...props}>WebXR</LandingButton>}
              </Tab>
            </Tabs>
          </div>

          <TabsList>
            <LandingCard
              alignContentInline="center"
              size="xlarge"
              variant="inverse"
            >
              <LandingCardIcon />
              <LandingCardHeading>Web Apps</LandingCardHeading>
              <LandingCardBody>
                Lorem ipsum dolor sit amet consectetur. Mi magna quis proin et
                dis sollicitudin faucibus magna id. Lacus neque tristique quam
                faucibus. Praesent nunc in ullamcorper elementum fringilla et
                massa aenean.
              </LandingCardBody>
              <div className="flex gap-3">
                <LandingLink href="/download" variant="inverse">
                  Download
                </LandingLink>
                <LandingLink
                  href="/docs/building-your-scene"
                  variant="inverse-border"
                >
                  See Docs
                </LandingLink>
              </div>
            </LandingCard>
            <LandingCard
              alignContentInline="center"
              size="xlarge"
              variant="inverse"
            >
              <LandingCardIcon />
              <LandingCardHeading>Web Games</LandingCardHeading>
              <LandingCardBody>
                Lorem ipsum dolor sit amet consectetur. Mi magna quis proin et
                dis sollicitudin faucibus magna id. Lacus neque tristique quam
                faucibus. Praesent nunc in ullamcorper elementum fringilla et
                massa aenean.
              </LandingCardBody>
              <div className="flex gap-3">
                <LandingLink href="/download" variant="inverse">
                  Download
                </LandingLink>
                <LandingLink
                  href="/docs/building-your-scene"
                  variant="inverse-border"
                >
                  See Docs
                </LandingLink>
              </div>
            </LandingCard>
            <LandingCard
              alignContentInline="center"
              size="xlarge"
              variant="inverse"
            >
              <LandingCardIcon />
              <LandingCardHeading>WebXR</LandingCardHeading>
              <LandingCardBody>
                Lorem ipsum dolor sit amet consectetur. Mi magna quis proin et
                dis sollicitudin faucibus magna id. Lacus neque tristique quam
                faucibus. Praesent nunc in ullamcorper elementum fringilla et
                massa aenean.
              </LandingCardBody>
              <div className="flex gap-3">
                <LandingLink href="/download" variant="inverse">
                  Download
                </LandingLink>
                <LandingLink
                  href="/docs/building-your-scene"
                  variant="inverse-border"
                >
                  See Docs
                </LandingLink>
              </div>
            </LandingCard>
          </TabsList>
        </div>
        <div className="bg-surface border-neutral flex aspect-video h-full items-center justify-center border lg:justify-start lg:pl-96">
          <TabsList>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (WEB_APPS_VIDEO)
            </div>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (WEB_GAMES_VIDEO)
            </div>
            <div className="text-subtlest select-none font-mono text-3xl font-medium">
              (WEB_XR_VIDEO)
            </div>
          </TabsList>
        </div>
      </TabsRoot>
    </div>
  );
}
