import React from 'react'
import { Icon, StyledCard } from './elements'
import Image from 'next/image'
import { BsPersonVideo2 } from 'react-icons/bs';
import { SiLibreofficemath } from 'react-icons/si';
import { GiTabletopPlayers } from "react-icons/gi";

export default function Card({ ...props }) {
  return (
    <>
      <StyledCard {...props}>
        <div className='container--all'>
          <div className='container--all-img'>
            <Image
              src="/img/video.png"
              width={300}
              height={550}
              alt="Picture of the author"
            />
          </div>
          <div className='container--all-desc'>
            <div className='container--desc'>
              <div className='desc--wrap'>
                <div className='text-icon--wrap'>
                  <div className='icon--wrap'>
                    <Icon as={SiLibreofficemath} />
                  </div>
                  <div className='text--wrap'>
                    <h3>Brief</h3>
                    <span>Complete <strong>brief writing or</strong></span>
                    <span><strong>simple guidance</strong> on what to</span>
                    <span>include, we've got you covered.</span>
                  </div>
                </div>
              </div>
              <div className='desc--wrap'>
                <div className='text-icon--wrap'>
                  <div className='icon--wrap'>
                    <Icon as={BsPersonVideo2} />
                  </div>
                  <div className='text--wrap'>
                    <h3>Search</h3>
                    <span>In-depth agency search covering:</span>
                    <span><strong>criteria matching</strong>,door knocking</span>
                    <span>and due-diligence vetting.</span>
                  </div>
                </div>
              </div>
              <div className='desc--wrap'>
                <div className='text-icon--wrap'>
                  <div className='icon--wrap'>
                    <Icon as={GiTabletopPlayers} />
                  </div>
                  <div className='text--wrap'>
                    <h3>Pitch</h3>
                    <span>Comprehensive <strong>pitch management,</strong></span>
                    <span>including comms, diary management</span>
                    <span>and pitch hosting.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </StyledCard>
    </>
  )
}
