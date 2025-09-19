import React, { useState } from "react";
import { Member } from "@/utils/member";
import styles from "../styles/MemberDirectory.module.css";

interface MemberDirectoryProps {
  members: Member[];
  view: "grid" | "list";
}

const MemberDirectory: React.FC<MemberDirectoryProps> = ({ members, view }) => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleOpenModal = (member: Member) => {
    setSelectedMember(member);
  };
  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <>
      {view === "list" ? (
        <div>
          <ul style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
            {members.map((member) => (
              <li
                key={member.id}
                className={styles.memberListItem}
                onClick={() => handleOpenModal(member)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={styles.memberAvatar}
                  style={{ backgroundImage: `url('${member.photo}')` }}
                  aria-label={member.name}
                ></div>
                <div className={styles.memberListInfo}>
                  <div className={styles.memberName}>{member.name}</div>
                  <div className={styles.memberOccupation}>
                    {member.occupation}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={styles.memberGrid}>
          {members.map((member) => (
            <div
              key={member.id}
              className={styles.memberCard}
              onClick={() => handleOpenModal(member)}
              style={{ cursor: "pointer" }}
            >
              <div
                className={styles.memberAvatar}
                style={{ backgroundImage: `url('${member.photo}')` }}
                aria-label={member.name}
              ></div>
              <div>
                <p className={styles.memberName}>{member.name}</p>
                <p className={styles.memberOccupation}>{member.occupation}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedMember && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeaderBg}></div>
            <button
              className={styles.modalClose}
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className={styles.modalHeaderSection}>
              <div className={styles.modalAvatarWrap}>
                <div
                  className={styles.modalAvatar}
                  style={{ backgroundImage: `url('${selectedMember.photo}')` }}
                  aria-label={selectedMember.name}
                ></div>
              </div>
              <h2 className={styles.modalName}>{selectedMember.name}</h2>
              <p className={styles.modalDob}>Born on {selectedMember.dob}</p>
              <p className={styles.modalParents}>
                Father: {selectedMember.father} &nbsp;|&nbsp; Mother:{" "}
                {selectedMember.mother}
              </p>
            </div>
            <div className={styles.modalDetailsGrid}>
              <div>
                <span className={styles.modalLabel}>
                  Occupation/Association
                </span>
                <p className={styles.modalValue}>{selectedMember.occupation}</p>
              </div>
              <div>
                <span className={styles.modalLabel}>Kulam</span>
                <p className={styles.modalValue}>{selectedMember.kulam}</p>
              </div>
              <div className={styles.modalGridFull}>
                <span className={styles.modalLabel}>Farm/Thottam Name</span>
                <p className={styles.modalValue}>{selectedMember.farm}</p>
              </div>
            </div>
            <div className={styles.modalSocialRow}>
              <a
                className={styles.iconSocial}
                href={`https://instagram.com/${selectedMember.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  fill="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </a>
              <a
                className={styles.iconSocial}
                href={`https://facebook.com/${selectedMember.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  fill="currentColor"
                  height="20"
                  width="20"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberDirectory;
