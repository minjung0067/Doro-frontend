/* eslint-disable jsx-a11y/no-redundant-roles */

interface IButtonProps {
  canClick: boolean;
  loading: boolean;
  actionText: string;
}

export const Button: React.FC<IButtonProps> = ({
  canClick,
  loading,
  actionText,
}) => (
  <button
    role="button"
    className={`text-lg font-medium focus:outline-none text-white py-4  transition-colors ${
      canClick
        ? " bg-blue-700 hover:  bg-blue-900"
        : "bg-gray-300 pointer-events-none"
    }`}
  >
    {loading ? "로딩 중..." : actionText}
  </button>
);
