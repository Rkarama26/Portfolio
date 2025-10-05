import React from "react";
import "./GithubRepoCard.scss";
import {Fade} from "react-reveal";
import {formatFileSizeDisplay} from "../../utils";

export default function GithubRepoCard({repo, isDark}) {
  if (!repo?.node) return null;
  const {
    name,
    description,
    url,
    homepageUrl,
    forkCount,
    stargazers,
    primaryLanguage,
    diskUsage
  } = repo.node;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
        key={repo.node.id}
      >
        {/* Repo Header */}
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="20"
            role="img"
            viewBox="0 0 12 16"
            width="14"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            ></path>
          </svg>
          <p className="repo-name">{name}</p>
        </div>

        {/* Description */}
        <p className="repo-description">
          {description || "No description provided."}
        </p>

        {/* Stats */}
        <div className="repo-stats">
          <div className="repo-left-stat">
            {primaryLanguage && (
              <span>
                <div
                  className="language-color"
                  style={{backgroundColor: primaryLanguage.color}}
                ></div>
                <p>{primaryLanguage.name}</p>
              </span>
            )}
            <span>
              <p>🍴 {forkCount}</p>
            </span>
            <span>
              <p>⭐ {stargazers.totalCount}</p>
            </span>
          </div>
          <div className="repo-right-stat">
            <p>{formatFileSizeDisplay(diskUsage)}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="repo-actions">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link-btn"
          >
            View on GitHub
          </a>
          {homepageUrl && (
            <a
              href={homepageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </Fade>
  );
}
