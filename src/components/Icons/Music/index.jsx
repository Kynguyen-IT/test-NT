const IconMusic = ({ height = 20, width = 20, color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <path d="M19.3991 0.10366C19.3178 0.0321823 19.2105 -0.000341767 19.1021 0.0125166L7.43152 1.52942C7.24404 1.55401 7.10362 1.71398 7.10362 1.90421V4.17976V5.77268V15.3726C6.41618 14.5425 5.32404 14.0024 4.09185 14.0024C2.016 14.0024 0.327148 15.5291 0.327148 17.4061C0.327148 19.283 2.016 20.8098 4.09185 20.8098C6.16771 20.8098 7.85656 19.283 7.85656 17.4061C7.85656 17.3183 7.84941 17.2321 7.84188 17.1463C7.84677 17.1217 7.85656 17.0994 7.85656 17.0737V6.10511L18.7742 4.68577V11.5903C18.0868 10.7606 16.9946 10.2205 15.7624 10.2205C13.6866 10.2205 11.9977 11.7473 11.9977 13.6242C11.9977 15.5012 13.6866 17.0279 15.7624 17.0279C17.8195 17.0279 19.4944 15.528 19.5245 13.6745C19.5245 13.6696 19.5271 13.6654 19.5271 13.6605V4.25539V2.66285V0.387678C19.5271 0.27876 19.4805 0.175137 19.3991 0.10366Z" fill={color} />
    </svg>
  );
};

export default IconMusic;