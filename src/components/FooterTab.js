import PropTypes from "prop-types";

const FooterTab = ({ title, subtitles }) => {
  return (
    <div className="mt-7">
      <h1 className="font-extrabold text-xl mb-6">{title}</h1>
      {subtitles && (
        <div>
          {subtitles.map((subtitle, i) => {
            return (
              <div key={i} className="mt-5 font-semibold">
                {subtitle.link && (
                  <a href={subtitle.link}>{subtitle.subtitle}</a>
                )}

                {!subtitle.link && <p>{subtitle.subtitle}</p>}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

FooterTab.propTypes = {
  title: PropTypes.string,
  subtitles: PropTypes.array,
}

export default FooterTab;
